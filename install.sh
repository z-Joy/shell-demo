#! /bin/bash

cd /home/admin/app/zaojia-saas-ui

yarn config set registry https://registry.npm.taobao.org/

echo yarn setting registry

NODE_ENV=development yarn install

echo install ok