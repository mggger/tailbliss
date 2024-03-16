---
title: "Embedの紹介：クイックスタート"
date: 2024-03-10
draft: false
description: "独自の知識ベースをトレーニングし、OpenAIのカスタムGPTと簡単に統合して、ユーザーの問い合わせに基づくますます正確な回答を得る方法を学びます。"
categories: ["embed"]
tags: ["embed"]
toc: true
featured_image: ../assets/images/featured/access-to-gpts.webp
---

# クイックスタート
この記事では、独自の知識ベースをトレーニングし、OpenAIカスタムGPTとシームレスに統合する方法を紹介します。ユーザーの質問に応じて知識ベースを洗練することで、ますます正確な回答を提供できます。

## 背景
OpenAIカスタムGPTの知識ベース機能は大幅に削減されました。現在、アップロードされたファイルはPythonコードによってのみ利用でき、ユーザーチャットの文脈を正確に提供することはできません。OpenAIは次のように述べています：

```
Knowledgeの下でファイルをアップロードすると、
GPTとの会話にファイルの内容が含まれる場合があります。
Code Interpreterが有効になっている場合、ファイルをダウンロードできます。
```

したがって、Embedサービスは以下の機能を提供します：
1. 独自の知識ベースをトレーニングする。
2. 任意のチャットボットを簡単に統合する。
3. ユーザーのクエリを記録し、継続的に最適化する。不正確なマッチが見つかった場合、知識ベースを再トレーニングし、日々の活動を監視できます。

## 知識のトレーニング
URL、ドキュメント（例：PDF、Word）などのデータソースに焦点を当て、GPT開発に関するロボットをトレーニングします...
### URLのトレーニング
URLと説明を入力します。説明はユーザーのクエリにマッチするために使用されます。
![Embed URLトレーニング](/images/embed/train_url.png)

### テキストのトレーニング
PDFやWordファイルのようなドキュメントでは、テキストを抽出できます。このテキストと、要約または抽出されたテキスト自体を使用して、モデルをトレーニングし、ユーザーのクエリにマッチさせます。
![Embed テキストトレーニング](/images/embed/train_text.png)

### トレーニングレコード
トレーニングが成功した後、トレーニングレコードを確認できます。その後のチャットマッチングがあまりにも悪い場合は、再トレーニングが可能です。
![Embed トレーニングレコード](/images/embed/train_records.png)

## OpenAIカスタムGPTの統合
OpenAIカスタムGPTをサービスに組み込むことで、特化した知識ベースを活用し、相互作用を豊かにします。この統合は、次の2ステッププロセスに従います：
1. **APIキーの取得**。
2. **OpenAIカスタムアクションの作成**。


### APIキーの取得
Embedサービスページにアクセスし、[設定]セクションに移動して開始します。ここでAPIキーを見つけ、コピーする必要があります。このキーは、OpenAIサービスへのリクエストを認証するためのトークンとして機能します。
![APIキー設定](/images/embed/setting.png)

APIトークンを取得したら、OpenAI GPTアクション設定ページに移動します。ここで、認証タイプをBearerに設定し、以前にコピーしたAPIキーを指定されたフィールドに貼り付けて、サービスとOpenAI間の安全な通信を確保します。
![APIキー設定](/images/embed/api_key.png)

### OpenAIカスタムアクションの作成
次に、EmbedサービスのOpenAIカスタムGPT統合セクションに進みます。このステップでは、アクションの名前を指定し、説明を提供し、プライバシー設定を行います。これらの詳細を確認して「保存」をクリックします。
![アクション作成](/images/embed/action_create.png)

保存すると、「統合」ボタンが表示されます。このボタンをクリックすると、アクションのYAML定義とプライバシーURLが表示されます。これらは、統合の次のステップに不可欠です。
![アクション定義](/images/embed/action_define.png)

これらの詳細をOpenAIアクション定義およびプライバシーリンクセクションの適切なフィールドにコピーして、設定プロセスを完了します。
![アクション設定](/images/embed/action_config.png)

### このアクションをGPTが使用するようにする
このカスタムアクションをGPTに搭載するには、次の構造化されたプロンプトを使用します。これは、GPTに対して`getKnowledge`アクションを呼び出して、ユーザーのクエリに正確に回答するために訓練された知識ベースから関連情報を取得する方法を指示します。
```
ユーザーの質問に答えるために、アクション'getKnowledge'を呼び出して正しいgetKnowledgeを検索します。
```



## チャット & 継続的な最適化

### チャット
統合が正しく設定されているかを確認するために、OpenAI GPTインターフェースを通じてテストを開始します。知識ベースが答えることができるはずのクエリを入力します。テストが成功すれば、GPTが訓練された知識ベースから情報を正確に取得し使用できることを示し、設定が正しいことが確認されます。

![アクションテスト](/images/embed/gpt_chat.png)

### チャットレコードの確認

Embedサービスは、継続的な改善のための貴重な機能を提供します：チャットレコードの確認機能。これにより、ユーザーがどのような質問をし、トレーニングデータとどの程度一致したかを確認できます。これらの相互作用を分析することは、知識ベースをユーザーのニーズにより適合させるための改善点を特定するために重要です。

![チャットレコード](/images/embed/chat_records.png)

### 継続的な最適化

応答の満足度が重要です。ユーザーのクエリに対する応答が期待に応えない場合は、知識ベースを洗練し拡張するオプションがあります。トレーニングレコードセクションにアクセスし、再トレーニングオプションを使用して知識の説明を豊かにします。これには、ユーザーのクエリとより一致するように調整し、様々な視点を追加するプロセスが含まれます。これにより、応答の正確性を継続的に最適化し改善できます。

## 結論

反応的で正確なチャットサービスを構築し維持するには、継続的な努力と洗練が必要です。Embedが提供するトレーニング、統合、最適化のためのツールは、このプロセスを容易にするように設計されており、チャットボットがユーザーにとって価値あるリソースであり続けることを保証します。さらなる支援やお問い合わせについては、[お問い合わせ](/contact)ください。