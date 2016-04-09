---
title: 'How to remove EVERYTHING from Windows 10 you dont need'
published: true
taxonomy:
    category:
        - Windows
    tag:
        - Windows
        - Bloatware
        - Cleanup
content:
    pagination: true
---

When I first installed Windows 10 on my PC i felt like a lot of the
pre-installed software was rather useless, and so I started my Journey
to clean up my Windows and save disk-space and improve performance by
remove everything i felt like I dont need.

## Pre-installed Apps

Windows 10 comes with quite a lot of “Apps” like the Music app, which -
in my opinion - are quite bad, so I prefer to use the software of my
choice here. If you want to remove those Apps, you need to open the
Windows PowerShell 2.0 which should already be installed on your system

After you opened the PowerShell 2.0, paste the following:


<pre><code class="powershell">
get-appxpackage -Name *WindowsCamera* | Remove-AppxPackage
get-appxpackage -Name *ZuneMusic* | Remove-AppxPackage
get-appxpackage -Name *WindowsMaps* | Remove-AppxPackage
get-appxpackage -Name *MicrosoftSolitaireCollection* | Remove-AppxPackage
get-appxpackage -Name *BingFinance* | Remove-AppxPackage
get-appxpackage -Name *ZuneVideo* | Remove-AppxPackage
get-appxpackage -Name *BingNews* | Remove-AppxPackage
get-appxpackage -Name *WindowsPhone* | Remove-AppxPackage
get-appxpackage -Name *Windows.Photos* | Remove-AppxPackage
get-appxpackage -Name *BingSports* | Remove-AppxPackage
get-appxpackage -Name *XboxApp* | Remove-AppxPackage
get-appxpackage -Name *BingWeather* | Remove-AppxPackage
get-appxpackage -Name *WindowsSoundRecorder* | Remove-AppxPackage
get-appxpackage -Name *3DBuilder* | Remove-AppxPackage
get-appxpackage -Name *SkypeApp* | Remove-AppxPackage
get-appxpackage -Name *MicrosoftOfficeHub* | Remove-AppxPackage
get-appxpackage -Name *windowscommunicationsapps* | Remove-AppxPackage
get-appxpackage -Name *Microsoft.People* | Remove-AppxPackage
</code></pre>

If you want to keep one of those Apps just remove the line before
pasting into the PowerShell.


## Cortana, OneDrive & every other privacy risk

One of the biggest additions in Windows 10 is Cortana, a voice based
assistant. If youre like me and dont like using this type of feature
(and dislike the idea of giving Microsoft your voice data), you can
safeley remove Cortana. The same goes for OneDrive, Microsofts Cloud
servive that is integrated into Windows 10. There are some more tools
that are potential risks like the “Windows Update Sharing” which i
recommend to disable.

It’s not really possible to directly disable those in Windows, but the
nice Freeware [Windows Tweaker 4] (Which can do a lot of other cool
stuff) helps with that.

Note: your antivirus might detect Windows Tweaker as trojan because it
modifies Windows files. I used the software for quite a while now and
never had issues, so I’m pretty sure its safe.

  [Windows Tweaker 4]: http://www.thewindowsclub.com/ultimate-windows-tweaker-4-windows-10
  
Once downloaded, run the .exe and go to "Security&Privacy". In the first tab, under "Windows", you can disable OneDrive (if you dont plan to use it you can also disable "Windows Store" too). In the "Privacy" tab you can disable Cortana and everything else that might try to spy on you, I disabled everything listened there and havent't had isssues with it.


If you have any questions or suggestions you can send me an [e-mail](mailto:contact@f-rilling.com)
