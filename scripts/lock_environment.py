import cv2
import numpy as np
from PIL import Image
import os

def main():
    p_master = r'c:\Users\HP\Desktop\portfolio\public\character\look_right.png'
    p_idle = r'C:\Users\HP\.gemini\antigravity\brain\09384ea3-c036-466f-801b-90bae26d1f5b\girl_idle_matched_1791743790092.png'
    p_greet = r'C:\Users\HP\.gemini\antigravity\brain\09384ea3-c036-466f-801b-90bae26d1f5b\girl_center_matched_1791743827974.png'
    p_point = r'C:\Users\HP\.gemini\antigravity\brain\09384ea3-c036-466f-801b-90bae26d1f5b\girl_point_matched_1791743864048.png'
    p_left = r'C:\Users\HP\.gemini\antigravity\brain\09384ea3-c036-466f-801b-90bae26d1f5b\girl_left_aligned_1791745615474.png'
    p_center = r'C:\Users\HP\.gemini\antigravity\brain\09384ea3-c036-466f-801b-90bae26d1f5b\girl_look_center_clean_1791747456023.png'

    master = cv2.imread(p_master)
    idle = cv2.imread(p_idle)
    greet = cv2.imread(p_greet)
    point = cv2.imread(p_point)
    left = cv2.imread(p_left)
    center = cv2.imread(p_center)

    h, w, _ = master.shape

    # 1. Master Desk & Cup mask (covers bottom table, papers, pen, cup)
    desk_mask = np.zeros((h, w), dtype=np.float32)
    # Cup & papers region (bottom left)
    desk_mask[920:, :460] = 1.0
    # Bottom desk strip across the bottom
    desk_mask[960:, :] = 1.0
    desk_mask = cv2.GaussianBlur(desk_mask, (15, 15), 0)

    # 2. Master Laptop lid mask (strictly outer lid with Dell logo, completely clear of sleeves)
    laptop_mask = np.zeros((h, w), dtype=np.float32)
    pts_laptop = np.array([
        [800, 630],
        [1024, 620],
        [1024, 1024],
        [780, 1024],
        [780, 800]
    ], dtype=np.int32)
    cv2.fillPoly(laptop_mask, [pts_laptop], 1.0)
    laptop_mask = cv2.GaussianBlur(laptop_mask, (15, 15), 0)

    # 3. Chair backrest mask (far left edge)
    chair_mask = np.zeros((h, w), dtype=np.float32)
    pts_chair = np.array([
        [0, 520],
        [200, 520],
        [200, 920],
        [0, 920]
    ], dtype=np.int32)
    cv2.fillPoly(chair_mask, [pts_chair], 1.0)
    chair_mask = cv2.GaussianBlur(chair_mask, (21, 21), 0)

    # 4. Studio background mask (top corners only, clear of waving hand and head)
    bg_mask = np.zeros((h, w), dtype=np.float32)
    bg_mask[:350, :200] = 1.0
    bg_mask[:350, 850:] = 1.0
    bg_mask = cv2.GaussianBlur(bg_mask, (25, 25), 0)

    def lock_environment(target_img, blend_laptop=True):
        res = target_img.astype(np.float32)
        m = master.astype(np.float32)
        
        # Apply background lock
        res = res * (1.0 - bg_mask[:, :, None]) + m * bg_mask[:, :, None]
        
        # Apply chair lock
        res = res * (1.0 - chair_mask[:, :, None]) + m * chair_mask[:, :, None]
        
        # Apply desk & cup lock
        d_mask = desk_mask[:, :, None]
        res = res * (1.0 - d_mask) + m * d_mask
        
        if blend_laptop:
            l_mask = laptop_mask[:, :, None]
            res = res * (1.0 - l_mask) + m * l_mask
            
        return np.clip(res, 0, 255).astype(np.uint8)

    res_right = master
    res_idle = lock_environment(idle)
    res_greet = lock_environment(greet, blend_laptop=False) # Keep greet waving hand clean
    res_point = lock_environment(point, blend_laptop=True)
    res_left = lock_environment(left, blend_laptop=True)
    res_center = lock_environment(center, blend_laptop=True)

    out_dir = r'c:\Users\HP\Desktop\portfolio\public\character'
    cv2.imwrite(os.path.join(out_dir, 'look_right.png'), res_right)
    cv2.imwrite(os.path.join(out_dir, 'idle_work.png'), res_idle)
    cv2.imwrite(os.path.join(out_dir, 'center_greet.png'), res_greet)
    cv2.imwrite(os.path.join(out_dir, 'center_point.png'), res_point)
    cv2.imwrite(os.path.join(out_dir, 'look_left.png'), res_left)
    cv2.imwrite(os.path.join(out_dir, 'look_center.png'), res_center)

    # Combined foreground mask for overlay (desk + cup + Dell logo)
    fg_mask = np.maximum(desk_mask, laptop_mask)
    fg_rgba = np.zeros((h, w, 4), dtype=np.uint8)
    fg_rgba[:, :, :3] = master
    fg_rgba[:, :, 3] = (fg_mask * 255.0).astype(np.uint8)
    cv2.imwrite(os.path.join(out_dir, 'character_foreground.png'), fg_rgba)

    print('Refined environment lock generated successfully!')

if __name__ == '__main__':
    main()
