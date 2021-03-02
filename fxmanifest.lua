fx_version 'cerulean'
game 'gta5'

author 'Kilichi | Kilichi#0001'
description 'KS HUD V3'
version '0.1.0'

ui_page 'html/index.html'

client_scripts {
    'client/*.lua',
}

server_script {
    '@mysql-async/lib/MySQL.lua',
    'server/*.lua',
}

files {
    'html/*.css',
    'html/*.html',
    'html/*.js'
}