---
title: "How to Find and Install Modules in MediaWiki"
date: 2024-03-15
description: "A comprehensive guide on finding and installing modules in MediaWiki to enhance functionality and user experience, including step-by-step installation and management of module dependencies."
categories:
  - MediaWiki
  - Wiki Management
tags:
  - MediaWiki
  - Modules
  - Installation
  - Wiki Customization
toc: true
draft: false
faq:
  - question: "What are modules in MediaWiki?"
    answer: "Modules in MediaWiki are extensions that allow users to extend its functionality, offering customized features and enhancements for wikis."
  - question: "How can I find modules for MediaWiki?"
    answer: "Modules can be found in the MediaWiki documentation or specific module pages, offering a variety of functionalities to enhance your wiki's capabilities."
  - question: "What is the process for installing a module in MediaWiki?"
    answer: "Installing a module involves locating the module code, creating a new module page on your wiki, copying the code into the new page, and saving it. This process installs the module for use on your wiki."
  - question: "How do I manage module dependencies in MediaWiki?"
    answer: "Check the module code for 'require' statements to identify dependencies. Ensure all required modules are also installed on your wiki for the module to function correctly."
---


# How to Find and Install Modules in MediaWiki

MediaWiki, the platform behind Wikipedia, offers a powerful feature called modules, which allows users to enhance their wikis with custom functionalities. These modules are written in Lua, a lightweight programming language designed for embedded use in applications. This article expands on finding and installing these modules in your MediaWiki site, focusing on a step-by-step approach to installing a module and understanding its dependencies.

## Finding Modules in MediaWiki

Finding the right module for your needs can significantly improve your wiki's functionality. Modules in MediaWiki are documented extensively, with the [Module:Documentation](https://www.mediawiki.org/wiki/Module:Documentation) page being a central hub for finding module information. This page not only provides documentation for templates and Lua modules but also guides on how to document your modules effectively.


### Key Places to Look for Modules


1. **MediaWiki.org's Extension Distribution**: This is the primary source of modules and extensions for MediaWiki. It hosts a wide range of modules, each with its documentation on how to use and install them.
   
2. **MediaWiki's Git Repository**: For more advanced users, MediaWiki's Git repository can be a treasure trove of modules. It includes not only the official extensions and modules but also third-party contributions.

3. **Community Forums and Discussion Pages**: Often, the MediaWiki community will share custom modules and extensions in forums or on the discussion pages of existing modules. This can be a great way to find modules tailored to specific needs.

## Installing Modules in MediaWiki
Installing a module in MediaWiki is straightforward but requires careful attention to ensure compatibility and correct functionality. Here’s a step-by-step guide to installing a module:

### Step 1: Understand the Module’s Requirements

Before proceeding with the installation, ensure your MediaWiki installation meets the module's requirements. This includes the MediaWiki version, PHP version, and any other dependencies specified in the module's documentation.

### Step 2: Download the Module

Modules can usually be downloaded directly from their documentation or repository page. Ensure you're downloading the latest version compatible with your MediaWiki installation.

### Step 3: Upload the Module

Upload the module files to the `/modules` directory in your MediaWiki installation. If this directory does not exist, you may need to create it following the structure outlined in the module's documentation.

### Step 4: Register the Module

To activate the module, you must register it in your MediaWiki configuration file (`LocalSettings.php`). This typically involves adding a line of code provided in the module's documentation. For example:
```php
require_once "$IP/modules/ModuleName/ModuleName.php";
```

### Step 5: Configure the Module
Some modules may require additional configuration, such as setting user permissions or configuring module-specific settings. These configurations are usually done in the LocalSettings.php file, following the instructions provided in the module's documentation.

## Managing Module Dependencies
Many modules depend on other modules or specific settings to function correctly. When installing a module, check its documentation for a list of dependencies and ensure they are also installed and configured on your wiki.

## Conclusion
Modules are a powerful way to extend the functionality of your MediaWiki site. By following the steps outlined above, you can find, install, and manage modules to customize your wiki to meet your needs. Remember to always test modules in a development environment before deploying them on a live site to ensure compatibility and stability.

