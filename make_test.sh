#!/bin/bash
for j in $(seq 1 4)
do
    [ -d $j ] || mkdir $j
    cd $j
    for i in $(seq 1 $1)
    do
        touch ${i}_in.t ${i}_out.t
        cp ../../test.js ./
    done
    cd ..
done
