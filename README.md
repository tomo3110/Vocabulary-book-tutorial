# Vocabulary-book-tutorial

### 利用技術
- ES2015
- webpack
- babel-loader
- mithril.js
- skeleton.css
- cordova

### setup
1. git clone running command line (terminal etc...)
```bash
$ git clone git@github.com:tomo3110/Vocabulary-book-tutorial.git
```
2. npm install command line
```bash
$ npm i -g webpack && cordova
$ cd ./Vocabulary-book-tutorial
$ npm i
```

3. running app
```bash
$ npm start
```

### 機能
- #### 単語帳:
  - 単語の追加
  - 単語の修正
- #### 暗記帳:
  - mikan likeに単語を覚える。
- #### テスト:
  - 暗記帳でわかると答えた単語を問題として、暗記できているかを測る。

### 課題
- 幾つかの機能が未だ未実装
  - test機能
  - 端末DB
  - CSVインポート
  - twitter連携機能
  - cordova-pulginで音声出力機能の追加
