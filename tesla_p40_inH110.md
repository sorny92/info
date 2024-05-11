## Process to install Tesla P40 in a i7-6700 with a h110 MB from HP.

Don't know what has made it work exactly but so far what I've done is next:

* Enable 4G Decoding: (Link)[https://github.com/xCuri0/ReBarUEFI/wiki/Enabling-hidden-4G-decoding]
* `GRUB_CMDLINE_LINUX_DEFAULT="pci=realloc pci=nocrs"` in /etc/default/grub (link)[https://forums.developer.nvidia.com/t/nvidia-kernel-driver-cannot-bind-to-rtx-3060-laptop-gpu/175990/13]
* Using the drivers provided by Cuda tolkit
* did this settings: (Link)[https://forums.developer.nvidia.com/t/nvidia-smi-no-devices-were-found-vmware-esxi-ubuntu-server-20-04-03-with-rtx3070/202904/42]

All this in a ubuntu server 22.04
