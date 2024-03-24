---
title: "Embed Chatbot Guide"
date: 2024-03-23
description: "Learn how to seamlessly integrate and share your chatbot with your website or knowledge base."
categories:
- embed
tags:
  - embed
toc: true
draft: false
---



# Introduction to Embedding Chatbots 

Embedding a chatbot allows for internal conversations within your own knowledge base and external sharing via an iframe to your website, equipping you with an official customer service bot. 

![chatbot-intro](/images/embed/chatbot-intro.png)

## Chatbot Settings 

![chatbot-settings](/images/embed/chatbot-settings.png)

Before using your chatbot, you must configure its settings, including the `System prompt`, `model`, `API key` (optional), and `Welcome Message`. 



### System Prompt 

Defines the system prompt for this chatbot. 



### Model 

We currently support three models:

- **llama-2-7b-chat-int8** (temporarily free, the conversation effect is inferior to gpt3.5, gpt4)
- **gpt-3.5-turbo** (requires an OpenAI API key)
- **gpt-4-0125-preview** (requires an OpenAI API key)


### Welcome Message

The first message users see when they start chatting.

After configuring these settings, you can start conversing immediately.

## Share Your Chatbots

In the chatbot settings, click `Generate Iframe Address` to get an iframe URL that can be easily integrated into any official website.


**Be cautious when sharing the iframe URL. Anyone with access to this address can integrate your chatbot into their site.**


Here's an example. Remember to replace the iframe address:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot Iframe</title>
    <!-- import Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 flex justify-center items-center h-screen">
<div class="w-full max-w-4xl h-full">
        <div class="w-full h-96">
            <iframe src="http://xxx" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
</div>
</body>
</html>
```
