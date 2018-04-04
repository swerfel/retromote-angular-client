#!/bin/bash

sed -ri "s/FIREBASE_API_KEY/$FIREBASE_API_KEY/" src/environments/environment.prod.ts
sed -ri "s/FIREBASE_MESSAGING_SENDER_ID/$FIREBASE_MESSAGING_SENDER_ID/" src/environments/environment.prod.ts
