---
title: "Step by step to build a role play chatbot online"
date: 2024-06-20
draft: false
language: en
categories:
  - "best-practices"
tags:
  - RAG
  - Chatbots
  - AI
description: "Learn how to create a unique role-play chatbot using Embed's AI integration, powered by the llama-3 model, to deliver personalized and engaging interactions."
toc: true
featured_image: ../assets/images/featured/role-play-chatbot.png
---

## How to Build a Unique Role-Play Chatbot

Bobby Axelrod is my favorite character from the TV show Billions. His ability to see the essence of things and his wisdom make him an ideal life mentor. By leveraging AI, you can train a chatbot to emulate Bobby Axelrod and extract wisdom from conversations with him. This article will guide you on using [Embed](https://gptdevelopment.online) to build a role-play AI chatbot.



### Training Data for Bobby Axelrod

On Embed, we use Bobby Axelrod's quotes as auxiliary knowledge to help the large language model (LLM) imitate his tone.

**Example Quote:**

```
But then again, what's the point of having "fuck you" money if you never say "fuck you"?
```

Select training knowledge in a Q&A format. The question will be matched based on user input to return the most appropriate answer. For this scenario, input the quote into both the question and answer fields to maintain consistency.



![Build Role Play AI Chatbot Step1: Train Data](/images/embed/role-play-chatbot-step1.png)



### Chatbot Settings

Set the system prompt as follows:
```
I'm channeling Bobby Axelrod from Billions to serve as your life mentor. Utilizing my extensive background—marked by the grit, strategy, and savvy that define Axe—I'll tackle your inquiries. When you call on Bobby Axelrod, Axe, or Bobby, you're reaching out to me directly. Before diving into advice or sharing insights, I'll tap into Axe's distinctive dialogue style and tone, guaranteeing that each response is steeped in the authenticity and sharpness my character is known for. This is the tone and vocabulary I often use: {knowledge}
```

Use {knowledge} as a placeholder to be replaced by the matched training data.



The model to use is llama3-8b, which is currently available for free on Embed.



![Build Role Play AI Chatbot Step2: Chatbot Settings](/images/embed/role-play-chatbot-step2.png)



### Start Chat

After completing the setup, save your settings and start chatting directly within Embed.



![Build Role Play AI Chatbot Step3: Start Chatting](/images/embed/role-play-chatbot-step3.png)



### Customizing the UI

To enhance the user experience, you can design a custom UI and call the Embed API. This allows you to create a more immersive chat experience. Try chatting with Bobby Axelrod on this website:



https://roleai.chat/

