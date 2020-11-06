# emerald
======= LIST OF COMMANDS =======
install <OS>      - Install Dependencies
run               - Run Application
-c || --create    - Create modules
                  Example:
                  ./app.sh -c <type> <name> -d <path>
                  ./app.sh --create <type> <name> --directory <path>
                  ./app.sh -c block testBlock -d test_block
                  <type>  - section | block | layout | template | public_control
                  <name>  - camelcase rule of naming files
                  <path>  - path will be created based on type of module. Note: Applicable only for blocks and public_control
-d || --delete    - Delete module
                  Example:
                  ./app.sh -d <type> <path>
                  ./app.sh --delete <type> <path>
                  <type>  - section | block | layout | template | public_control
                  <path>  - path to file

========== INSTALL ============
run ./app.sh install <OS> to install all dependencies
========= RUN ===========
run ./app.sh run
  
  


The MIT License (MIT)
Copyright © 2020 Mitko Mirevski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
