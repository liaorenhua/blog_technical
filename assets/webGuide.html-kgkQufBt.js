import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,l as t,o as a}from"./app-B0ja0XpF.js";const n={};function l(o,e){return a(),s("div",null,e[0]||(e[0]=[t(`<p>Welcome to participate in the &quot;PvZ2 Gardendless&quot; official website open source project! Whether you are a novice developer or an experienced developer, we encourage you to contribute code, submit issues or suggestions. Below is a brief development guide to help zero-based users quickly participate in this project.</p><h2 id="_1-preparation" tabindex="-1"><a class="header-anchor" href="#_1-preparation"><span>1. Preparation</span></a></h2><p>Before you start, you need to complete some basic settings. For <code>Windows</code> systems, we recommend that you use <code>PowerShell</code> of <code>Windows Terminal</code> to run commands, which can be started through the right-click menu.</p><h3 id="_1-1-install-vscode-git-and-node-js" tabindex="-1"><a class="header-anchor" href="#_1-1-install-vscode-git-and-node-js"><span>1.1 Install VScode, Git and Node.js</span></a></h3><h4 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VScode</span></a></h4><p>VScode is a lightweight code editor that supports multiple programming languages. In project development, we recommend using VScode to edit code.</p><ul><li>Download and install VScode: <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VScode official website</a></li><li>Read the <a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer">VScode documentation</a> to learn more about how to use it.</li><li>It is recommended to install plugins: <code>Vue - Official</code>, <code>ESLint</code>, <code>GitLens</code>, etc. to improve development efficiency.</li></ul><h4 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h4><p>Git is a tool for managing project versions. In project development, we will use Git to pull code and submit modifications.</p><ul><li>Download and install Git: <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git official website</a>, for Windows, it is recommended that you download <code>64-bit Git for Windows Setup</code>.</li><li>You can use the default settings during the installation process.</li><li>It is recommended to select <code>Use Visual Studio Code as Git&#39;s default editor</code> for the default editor.</li><li>It is recommended to select <code>Git from the command line and also from 3rd-party software</code> for environment variable configuration.</li><li>After the installation is complete, you can run the following command through the command line to confirm whether the installation is successful:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>Node.js</span></a></h4><p>VuePress is a static website generator based on Node.js, so you need to install Node.js.</p><ul><li>Download and install Node.js: <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js official website</a></li><li>After the installation is complete, you can run the following command to confirm whether the installation is successful:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-install-corepack" tabindex="-1"><a class="header-anchor" href="#_1-2-install-corepack"><span>1.2 Install Corepack</span></a></h3><p>Corepack is a Node.js package manager that helps you install and manage project dependencies faster.</p><ul><li>Run the following command to activate Corepack:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">corepack</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-fork-the-project" tabindex="-1"><a class="header-anchor" href="#_2-fork-the-project"><span>2. Fork the project</span></a></h2><h3 id="_2-1-create-a-github-account" tabindex="-1"><a class="header-anchor" href="#_2-1-create-a-github-account"><span>2.1 Create a Github account</span></a></h3><p>Before participating in the project, you need to register a GitHub account.</p><h3 id="_2-2-fork-the-project" tabindex="-1"><a class="header-anchor" href="#_2-2-fork-the-project"><span>2.2 Fork the project</span></a></h3><p>When participating in a project on GitHub, you can fork (copy a copy of the project to your own account) to carry out development work.</p><ol><li>Visit the <a href="https://github.com/Gzh0821/pvzg_site" target="_blank" rel="noopener noreferrer">pvzg_site project</a>.</li><li>Click the <code>Fork</code> button in the upper right corner of the page to copy the project to your own GitHub repository.</li><li>Enter the project repository you forked.</li></ol><h2 id="_3-clone-the-project-locally" tabindex="-1"><a class="header-anchor" href="#_3-clone-the-project-locally"><span>3. Clone the project locally</span></a></h2><p>After you fork the project, you need to clone the project code to your local computer. <code>VScode</code> provides the function of cloning repositories. You can check its documentation to learn more, or use the terminal:</p><ol><li><p>Open the terminal. For Windows, please use <code>Windows Terminal</code> or the terminal function included with <code>VScode</code>.</p></li><li><p>In the path where you want to place this project, run the following command to clone the project locally:</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/YOUR_USERNAME/pvzg_site.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Please replace <code>YOUR_USERNAME</code> with your GitHub username.</p><ol start="3"><li>Enter the project directory, which should contain the <code>package.json</code> file:</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pvzg_site</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>Open the project directory through <code>VScode</code>. After that, you can use <code>VScode</code> to enter commands and write files:</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4-install-dependencies" tabindex="-1"><a class="header-anchor" href="#_4-install-dependencies"><span>4. Install dependencies</span></a></h2><p>After entering the project directory, you need to install the dependency packages required by the project. All subsequent commands must be entered in the project directory path.</p><ul><li>Use <code>Corepack</code> to install <code>pnpm</code>, and use <code>pnpm</code> to install dependencies:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">corepack</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Check if pnpm is correctly installed in the project</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-run-the-development-environment" tabindex="-1"><a class="header-anchor" href="#_5-run-the-development-environment"><span>5. Run the development environment</span></a></h2><p>After installing the dependencies, you can start the development environment of the project and view the document website running locally.</p><ul><li>Use the following command to start the development server:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docs:dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After successful startup, you can visit <code>http://localhost:8080</code> in your browser to view the website in development.</p><h2 id="_6-start-editing" tabindex="-1"><a class="header-anchor" href="#_6-start-editing"><span>6. Start editing</span></a></h2><p>Now you can modify and optimize the code.</p><h3 id="_6-1-markdown-file" tabindex="-1"><a class="header-anchor" href="#_6-1-markdown-file"><span>6.1 Markdown file</span></a></h3><p>Markdown is a lightweight markup language. You can learn more about it through <a href="https://www.markdownguide.org/" target="_blank" rel="noopener noreferrer">Markdown Guide</a>.</p><p>The page content of the project is mainly written in Markdown, with the suffix <code>.md</code>. You can find the page files of the project in the <code>src</code> directory.</p><p>This project is developed using <code>Vuepress</code>. For the use of <code>Vuepress</code>, you can check <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuepress official documentation</a> to learn more.</p><p>The format of <code>.md</code> files is as follows:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- Configuration items --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">title: page title</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">index: false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">---</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- HTML components --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Catalog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">info</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> info</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> here</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">### </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Title</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Content</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-provide-translations" tabindex="-1"><a class="header-anchor" href="#_6-2-provide-translations"><span>6.2 Provide translations</span></a></h3><p>Under the <code>src</code> directory, you can find the <code>en</code> directory, which contains the English pages of this website. You can refer to the files in this directory and translate them into other languages.</p><p>For translation work, you only need to modify the <code>.md</code> files in the corresponding language directory, such as <code>ru-RU</code>, <code>pt-BR</code>. You need to keep the file structure and name in the directory consistent with <code>en</code>.</p><p>For the configuration items in the <code>.md</code> file, only <code>title</code> needs to be modified, and for the <code>HTML component</code>, it can be left unchanged. It is recommended that you check whether the page is displayed correctly at any time when making changes.</p><h2 id="_7-submit-changes-and-initiate-a-pull-request" tabindex="-1"><a class="header-anchor" href="#_7-submit-changes-and-initiate-a-pull-request"><span>7. Submit changes and initiate a Pull Request</span></a></h2><p>When you have completed the code modification and tested successfully, you can submit your changes and initiate a Pull Request.</p><h3 id="_7-1-submit-changes-and-push-to-github" tabindex="-1"><a class="header-anchor" href="#_7-1-submit-changes-and-push-to-github"><span>7.1 Submit changes and push to GitHub</span></a></h3><p>We recommend that you use <code>VScode</code> to submit. Just fill in the submission information in <code>Source Control</code> on the left side of <code>VScode</code>, then click Submit, and click Synchronize Changes.</p><p>To submit using the terminal:</p><ol><li>Add the modified code to Git:</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>Submit the changes:</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Describe your changes&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>Push local changes to your own GitHub repository:</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_7-2-initiate-pull-request" tabindex="-1"><a class="header-anchor" href="#_7-2-initiate-pull-request"><span>7.2 Initiate Pull Request</span></a></h3><ol><li>Go to your GitHub repository page.</li><li>Click the <code>Compare &amp; pull request</code> button at the top of the page.</li><li>Fill in the description of the changes and submit the Pull Request.</li></ol><p>We will review your Pull Request as soon as possible and provide feedback or merge as needed.</p><h2 id="_8-submit-issues" tabindex="-1"><a class="header-anchor" href="#_8-submit-issues"><span>8. Submit Issues</span></a></h2><p>If you encounter problems during development, you can provide feedback through GitHub&#39;s Issues system.</p><ol><li><p>Visit the project&#39;s <a href="https://github.com/Gzh0821/pvzg_site/issues" target="_blank" rel="noopener noreferrer">Issues page</a>.</p></li><li><p>Click the <code>New issue</code> button.</p></li><li><p>Fill in the problem description and submit.</p></li></ol><h2 id="_9-participate-in-discussions" tabindex="-1"><a class="header-anchor" href="#_9-participate-in-discussions"><span>9. Participate in discussions</span></a></h2><p>We welcome all users to participate in the project&#39;s discussions! You can communicate with us in the following ways:</p><ul><li><p>Participate in Discussions on GitHub.</p></li><li><p>Participate in discussions on the Discord server.</p></li></ul><p>Thank you for your support and contribution to this project, and we look forward to working with you to improve this project!</p>`,76)]))}const h=i(n,[["render",l],["__file","webGuide.html.vue"]]),c=JSON.parse('{"path":"/pt-BR/guide/webGuide.html","title":"Website Development Guide","lang":"pt-BR","frontmatter":{"title":"Website Development Guide","icon":"laptop-code","pageInfo":false,"comment":false,"index":true,"order":5,"description":"Welcome to participate in the \\"PvZ2 Gardendless\\" official website open source project! Whether you are a novice developer or an experienced developer, we encourage you to contri...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.pvzge.com/en/guide/webGuide.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.pvzge.com/guide/webGuide.html"}],["meta",{"property":"og:url","content":"https://www.pvzge.com/pt-BR/guide/webGuide.html"}],["meta",{"property":"og:site_name","content":"Site oficial do PvZ2 Gardendless"}],["meta",{"property":"og:title","content":"Website Development Guide"}],["meta",{"property":"og:description","content":"Welcome to participate in the \\"PvZ2 Gardendless\\" official website open source project! Whether you are a novice developer or an experienced developer, we encourage you to contri..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-21T06:53:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-21T06:53:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Website Development Guide\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-21T06:53:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LMYY\\",\\"url\\":\\"https://gaozih.com\\"}]}"]]},"headers":[{"level":2,"title":"1. Preparation","slug":"_1-preparation","link":"#_1-preparation","children":[{"level":3,"title":"1.1 Install VScode, Git and Node.js","slug":"_1-1-install-vscode-git-and-node-js","link":"#_1-1-install-vscode-git-and-node-js","children":[]},{"level":3,"title":"1.2 Install Corepack","slug":"_1-2-install-corepack","link":"#_1-2-install-corepack","children":[]}]},{"level":2,"title":"2. Fork the project","slug":"_2-fork-the-project","link":"#_2-fork-the-project","children":[{"level":3,"title":"2.1 Create a Github account","slug":"_2-1-create-a-github-account","link":"#_2-1-create-a-github-account","children":[]},{"level":3,"title":"2.2 Fork the project","slug":"_2-2-fork-the-project","link":"#_2-2-fork-the-project","children":[]}]},{"level":2,"title":"3. Clone the project locally","slug":"_3-clone-the-project-locally","link":"#_3-clone-the-project-locally","children":[]},{"level":2,"title":"4. Install dependencies","slug":"_4-install-dependencies","link":"#_4-install-dependencies","children":[]},{"level":2,"title":"5. Run the development environment","slug":"_5-run-the-development-environment","link":"#_5-run-the-development-environment","children":[]},{"level":2,"title":"6. Start editing","slug":"_6-start-editing","link":"#_6-start-editing","children":[{"level":3,"title":"6.1 Markdown file","slug":"_6-1-markdown-file","link":"#_6-1-markdown-file","children":[]},{"level":3,"title":"6.2 Provide translations","slug":"_6-2-provide-translations","link":"#_6-2-provide-translations","children":[]}]},{"level":2,"title":"7. Submit changes and initiate a Pull Request","slug":"_7-submit-changes-and-initiate-a-pull-request","link":"#_7-submit-changes-and-initiate-a-pull-request","children":[{"level":3,"title":"7.1 Submit changes and push to GitHub","slug":"_7-1-submit-changes-and-push-to-github","link":"#_7-1-submit-changes-and-push-to-github","children":[]},{"level":3,"title":"7.2 Initiate Pull Request","slug":"_7-2-initiate-pull-request","link":"#_7-2-initiate-pull-request","children":[]}]},{"level":2,"title":"8. Submit Issues","slug":"_8-submit-issues","link":"#_8-submit-issues","children":[]},{"level":2,"title":"9. Participate in discussions","slug":"_9-participate-in-discussions","link":"#_9-participate-in-discussions","children":[]}],"git":{"createdTime":1734763962000,"updatedTime":1734763998000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":2,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":3.93,"words":1179},"filePathRelative":"pt-BR/guide/webGuide.md","localizedDate":"21 de dezembro de 2024","autoDesc":true}');export{h as comp,c as data};
