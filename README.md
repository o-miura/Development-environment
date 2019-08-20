# Development-environment
Linuxでのweb開発環境構築手順　

## npm から gulp インストールまでの手順  
  Node.jsをインストール  
~~~
sudo apt-get install nodejs npm
~~~
  npmのバージョンを確認しておく
~~~
npm -v
~~~
  npmのバージョンを最新にしておく
~~~
sudo npm install -g npm
~~~
  npmの設定ファイルを作成  
  コマンドを叩いたディレクトリに package.json というファイルができます。
~~~
npm init
~~~
