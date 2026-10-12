import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless=new")
options.add_argument("--window-size=1600,1000")

driver = webdriver.Chrome(options=options)
try:
    driver.get("http://localhost:5173")
    time.sleep(3)
    
    details = driver.execute_script("""
        const btn = document.querySelector('.specular-button');
        const canvas = document.querySelector('.specular-button__light');
        const label = document.querySelector('.specular-button__label');
        
        return {
            button: {
                tagName: btn.tagName,
                className: btn.className,
                innerHTML: btn.innerHTML,
                offsetWidth: btn.offsetWidth,
                offsetHeight: btn.offsetHeight,
                computedBg: window.getComputedStyle(btn).backgroundColor,
                computedBorder: window.getComputedStyle(btn).border
            },
            canvas: {
                width: canvas.width,
                height: canvas.height,
                offsetWidth: canvas.offsetWidth,
                offsetHeight: canvas.offsetHeight,
                styleDisplay: window.getComputedStyle(canvas).display,
                styleBg: window.getComputedStyle(canvas).backgroundColor
            },
            label: {
                innerText: label.innerText,
                offsetWidth: label.offsetWidth,
                offsetHeight: label.offsetHeight,
                color: window.getComputedStyle(label).color
            }
        };
    """)
    
    with open("diagnose.txt", "w", encoding="utf-8") as f:
        import json
        f.write(json.dumps(details, indent=2))
        
    print("Diagnosis written!")
finally:
    driver.quit()
