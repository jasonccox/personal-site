---
title: Explore Your Tools: How I Unknowingly Re-implemented tar
image: tools.jpg
publish_date: 2020-04-10 21:55 -4
date: 2020-04-10 21:55 -4
---

Sometime last year I wrote a relatively simple script for backing up and restoring deeply-nested configuration files. Had I taken a little time to further explore my tools, I would have discovered that I already had what I was looking for.

===

Sometime last year I wrote [`config-keeper`](https://github.com/jasonccox/config-keeper), a relatively simple script for backing up and restoring deeply-nested configuration files. It's nothing crazy -- just 150 lines of code -- but I spent several hours on it, and it worked. I even took the time to write up a nice readme in hopes that other people would find it useful.

Fast-forward to just last night. I was reading [The Linux Command Line](http://linuxcommand.org/tlcl.php) -- a great book that's available as a free PDF, by the way -- and learning about backup tools like `gzip`, `tar`, and `rsync`. I had used `tar` before, but only for really simple tasks like archiving an entire directory to submit a school assignment.

Then, as I was reading about more of `tar`'s capabilities, I had a realization: `tar` is already capable of everything `config-keeper` does, plus more!

I immediately felt foolish. I had essentially re-implemented a subset of `tar`'s capabilities, even using `tar` itself to do so. I'd posted it online, proud of my nifty new script. How silly of me!

Now, that foolish feeling wore off quickly, and I don't regret writing `config-keeper`. It was one of the first non-trivial shell scripts I wrote, so I gained many new skills in the process.

However, I learned an important lesson from this experience: become familiar with the tools available to you. In my case, it was the Linux command line. Had I taken a little time to further explore my tools, I would have discovered that I already had what I was looking for.

