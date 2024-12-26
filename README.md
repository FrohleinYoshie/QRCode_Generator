![image](https://github.com/user-attachments/assets/b245458e-06a2-4c96-9762-3db0c1a7c9c4)

## このサービスへの想い
このサービスはURLを入れるだけでQRコードが生成されます。
生成されたQRコードは.png画像としてダウンロードすることも可能ですし、コピー&ペーストで貼り付けることもできます。
UIも非常にシンプルなので直感的に使いやすいように工夫しました。

## 機能説明
|実行時|生成後| エラーメッセージ |
| --- | --- | --- |
|<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F3631203%2Ffdf39e91-2c20-ea9b-882f-24633ea2596d.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=933f331c1701f52289468f2eac018e83" width="400px">|<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F3631203%2Fd1450c54-3ce8-2f15-ea2c-afc5abe606db.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=691874382be7e022ab9c5da37a894584" width="400px">|<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F3631203%2F739436d9-32f5-c9ab-17f2-747bfdf2ccf7.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=bdabf844c91237a8f03087ea1490068b" width="400px">|
| 中央の入力画面にURLを入れます | QRコードが生成されます | URL以外はエラーが出ます |

## 使用技術
|カテゴリー| 言語・フレームワーク・技術 |
|---|---|
| フロントエンド | TypeScript, React |
|バックエンド|Go|
|デザイン|Figma|

## 今後の展望
- データベースを実装し生成されたQRコードを保存する
- 認証機能を用意してよりセキュリティと利便性を上げる
