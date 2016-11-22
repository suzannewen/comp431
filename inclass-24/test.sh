#!/bin/bash
PORT=3000

echo "POST /register"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/register -d "{ \"username\":\"Suzanne\", \"password\":\"test\" }"
echo ""

echo "POST /login"
curl -H 'Content-Type: application/json' -v --cookie "sid=badtest" http://localhost:${PORT}/login -d "{ \"username\":\"Suzanne\", \"password\":\"test\" }"
echo ""

echo "POST /login"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d "{ \"username\":\"Suzanne\", \"password\":\"badtest\" }"
echo ""
