#!/usr/bin/python3
'''A python program to clone the freshna website'''

import requests
from bs4 import BeautifulSoup

def get_page_content(url, payload = None):
    '''Returns html content from url'''

    with requests.Session() as session:
        res = session.get(url)
        if res.status_code == 200:
            soup = BeautifulSoup(res.content, 'html.parser')
            links = soup.find_all('a')
            for link in links:
                l = link.get('href')
                arr = l.split('/')
                name = arr[len(arr)-1]
                with open('links.txt', 'a', encoding='utf-8') as f:
                    f.write("{}\n".format(str(l)))
            return soup.prettify()
        else:
            print("Error: {}".format(res))

def create_html_page(filename, content):
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
        print('Successfully written to {}'.format(filename))

if __name__ == '__main__':
    print('Getting page content')
    
    content = get_page_content('https://support.fresha.com/hc/en-us')
    create_html_page('support.html', content)