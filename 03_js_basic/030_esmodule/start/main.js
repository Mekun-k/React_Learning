import funcB, { hello, User } from "./module.js"

// オブジェクトを作成
const user = new User("Tom")

hello();
funcB();

// オブジェクトにクラスメソッドを使用する
user.hello();


