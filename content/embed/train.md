---
title: "Introduce Embed: Train Your Knowledge"
date: 2024-03-04
draft: false
description: ""
categories: ["embed"]
tags: ["embed"]
toc: true
featured_image: ../assets/images/featured/access-to-gpts.webp
---

# Embed
For OpenAI GPTs, accessing its knowledge base can be challenging, limited to built-in python capabilities for reading files. Thus, the Embed service supports training on various types of data sources, such as URLs and text. It also allows viewing training results. If the provided data descriptions are inaccurate, you can enrich and refine them for retraining.

## Train URL
1. If you need the content of a specific URL as background knowledge, you can add a description to it and train, to match user inputs.
   Example:
- Description: The website of GPT development
- URL: https://gptdevelopment.online/

![Train URL](/images/embed/train_url.png)

## Train Text
1. Similar to training URLs, if you need to use a large amount of text as background knowledge, you can add a description to it, to match user inputs.

- Description: A joke
- Text: Why don't scientists trust atoms anymore? Because they make up everything! Even when you think you've got them figured out, they're just full of surprises. Just like my diet plan—full of empty promises!

![Train Text](/images/embed/train_text.png)

## Train Records
Finally, you can view training records. In practical use, if you encounter inaccurate matches, you can retrain by enriching the data's description to better match users' queries from various angles.

![Train Records](/images/embed/train_records.png)
