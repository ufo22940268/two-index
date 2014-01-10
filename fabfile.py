from fabric.api import *

# the user to use for the remote commands
env.user = 'root'
# the servers where the commands are executed
env.hosts = ['192.241.196.189']

def deploy():
    with cd("/usr/share/nginx/html/two-index"):
        run('git pull')
