---
title: "Guide to Installing Modules in MediaWiki"
date: 2024-03-20
description: "Simplify the process of enhancing your MediaWiki site by installing modules. Follow this straightforward guide, including FAQs for ease of use."
categories:
  - MediaWiki
  - Wiki Management
tags:
  - MediaWiki Modules
  - Easy Installation
  - Module Dependencies
toc: true
draft: false
faq:
  - question: "What are MediaWiki modules?"
    answer: "MediaWiki modules add new features or extend functionality, making your wiki more powerful and customized."
  - question: "Where to find MediaWiki modules?"
    answer: "Look at MediaWiki.org, its Git repository, or community forums for a wide range of modules."
  - question: "How do I install a MediaWiki module?"
    answer: "Download the module, place it in the `/modules` directory, and register it in `LocalSettings.php`."
  - question: "Managing module dependencies?"
    answer: "Install all necessary dependencies as mentioned in the module's documentation to avoid errors."
---

# Installing Modules in MediaWiki: A Simple Guide

Enhancing your MediaWiki site with additional functionalities through modules is straightforward. This guide covers essential steps to find, install, and manage MediaWiki modules effectively.

## Finding Modules for Your Wiki

Enhance your MediaWiki with the right module from these sources:
- **MediaWiki.org's Extension Distribution**: The go-to for a variety of modules.
- **MediaWiki's Git Repository**: Offers both official and third-party modules.
- **Community Forums**: A place for custom modules and direct community support.

## Easy Module Installation

### Step 1: Check Requirements
Ensure compatibility by checking the MediaWiki version and PHP requirements of the module.

### Step 2: Download and Upload
Download the module from the appropriate source and upload it to your MediaWiki's `/modules` directory.

### Step 3: Activate the Module
In `LocalSettings.php`, register the module with a line such as:
```php
require_once "$IP/modules/ModuleName/ModuleName.php";
```

### Step 4: Configure If Needed
Follow the module's documentation for any additional setup or configuration.


## Handling Dependencies
To ensure smooth operation, install any required modules or meet the settings as listed in your module's documentation.

Modules significantly boost your MediaWiki's capabilities. By following this guide, installing and managing them becomes an effortless task, allowing you to customize your wiki to your needs efficiently.

