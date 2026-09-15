#!/bin/bash
sudo swapoff /swapfile && \
sudo fallocate -l ${0}G /swapfile && \
sudo mkswap /swapfile && \
sudo swapon /swapfile && \
sudo swapon -s

