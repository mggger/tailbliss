---
title: "Integrating OpenAI Custom GPTs"
date: 2024-03-04
draft: false
description: "Step-by-step guide on integrating OpenAI Custom GPTs with embed services."
categories: ["embed"]
tags: ["embed"]
toc: true
featured_image: ../assets/images/featured/access-to-gpts.webp
---

# Integrating OpenAI Custom GPTs

Integrating OpenAI Custom GPTs into your services involves a two-step process:
1. Acquiring an API Key
2. Creating OpenAI Custom Actions

## Acquiring an API Key
First, navigate to the Embed service page and click on the Settings. Copy the API key from there.
![API Key Settings](/images/embed/setting.png)

Once you have the API token, go to the configuration page for OpenAI GPTs action. Set the authentication to Bearer and paste the copied API key into the designated field.

![API Key Configuration](/images/embed/api_key.png)

## Creating OpenAI Custom Actions
On the Embed service page, go to the OpenAI Custom GPTs integration section. Here, you can configure the name of the action, a description for it, and your privacy information for when it is used. Click save after filling in these details.

![Action Creation](/images/embed/action_create.png)

After saving, an 'Integrate' button will appear. Click this to obtain the YAML definition of the action and the privacy URL.

![Action Definition](/images/embed/action_define.png)

Copy and paste these into the OpenAI action definition and privacy link fields, respectively.

![Action Configuration](/images/embed/action_config.png)

## Testing
Finally, conduct a test by entering a query in the OpenAI GPTs page. If the result matches your training data, the configuration is successful.

![Action Test](/images/embed/action_test.png)

Additionally, you can view user queries and the matched training results on the Embed service page. This is useful for further optimization of your knowledge base training.

![Chat Records](/images/embed/chat_records.png)

This guide provides a comprehensive overview of how to integrate OpenAI Custom GPTs with your service, including obtaining an API key, creating custom actions, and testing the integration.