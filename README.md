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
回答しない場合は、エンターキーを押すことで、( )内にコンピューターが指定してきた情報のまま生成する場合や、( )の表示がない場合には無記載で生成する事になります。
解答せずエンターキーを押し続けることでもpackage.jsonは生成されますし、それ自体何も問題になることではありませんので、初回は全てエンターキーを安心して押して下さい。

*3行目のdescription:概要説明
*4行目のentry point: (index.js)初期表示させるファイルをjsファイル
*5行目test command:テストコマンド
*6行目のgit repository:Github等に保存するリポジトリ情報登録
*7行目のkeywords:では、npm公開時等で使用されるキーワードを設定
*8行目のauthor: npm公開時に必要とされる作者情報を設定
*9行目のlicense: (ISC)はnpm公開時に適用する権利情報を記載
