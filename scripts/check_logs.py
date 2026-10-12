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
    
    logs = driver.get_log('browser')
    with open("browser_logs.txt", "w", encoding="utf-8") as f:
        for log in logs:
            f.write(str(log) + "\n")
            
    print(f"Logged {len(logs)} messages")
finally:
    driver.quit()
