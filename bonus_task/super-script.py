import sys

import requests
import json


def get_opened_prs(token):
    git_url = 'https://api.github.com/repos/askomaro/pitch_tc/pulls'
    headers = {
        'Authorization': 'token {0}'.format(token),
        'Accept': 'application/vnd.github.v3+json'
        }

    resp = requests.get(git_url, headers=headers)

    if not resp.ok:
        print('Request Failed: {0}'.format(resp.text))
        # :)

    return print_nicely(resp)


def print_nicely(raw_response):
    json_resp = json.loads(raw_response.content)
    if not json_resp:
        print('There is no opened PRs ;(')
        return

    critical_prs = []
    important_prs = []
    other_prs = []

    for pr in json_resp:
        l_titles = []
        for label in pr['labels']:
            l_titles.append(label['name'])

        if 'Critical' in l_titles:
            critical_prs.append(pr)
        elif 'Important' in l_titles:
            important_prs.append(pr)
        else:
            other_prs.append(pr)

    _print_to_console('Next Critical opened PR(s) have been found:', critical_prs)
    _print_to_console('\nNext Important opened PR(s) have been found:', important_prs)
    _print_to_console('\nOther:', other_prs)


def _print_to_console(title, pr_list):
    print(title)
    [print(f'- {pr["title"]}') for pr in pr_list]


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Please provide github authorization token as argument!')

    get_opened_prs(sys.argv[1])
