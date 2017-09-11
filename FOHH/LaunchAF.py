import os
cwd = os.getcwd()
dirlist = os.listdir(cwd)

## This thing will find and copy content-block data from an html page,
##  and replace the header and footer of the html page with standard versions
##  while keeping the content the same, as well as the page title.
## It does this by...
##  -Opening the two .txt files that contain the standard header/footer and copying the content
##  -Reading an .html file line-by-line
##  -Looking for lines containing the tags <div class='content'> and <div class='footer'>
##   and holding the data between those tags, as well as the <title> line
##  -Going to the first byte of the file and truncating it to wipe it
##  -Writing the standard header, holding the title per page
##  -Writing the content-block data per page
##  -Writing the standard footer



## Don't use
## file = open('filename.txt', 'r')
## text file.read()
## file.close()
## because if there are running errors, the file fails to close.
## Using 'with open as f' makes sure the file is closed if errors occur

with open('zero-header.txt', 'r') as f:
    header_text = f.read()

with open('zero-footer.txt', 'r') as f:
    footer_text = f.read()

write_state = False
##print(dirlist)

for file in dirlist:
    if str(file)[-5:]=='.html' and str(file)[:5].lower()!='zero-': # find all .html files
        print('modding {}'.format(file))
        with open(file, 'r+') as base_file:
            str_content_data = '' # clear content var
            for line in base_file: # read line-by-line
                if line.strip()[:7].lower()=='<title>': # find and copy page title
                    # print('Page Title: {}'.format(line.strip()[7:-8]))
                    page_title = line.strip()[7:-8]
                if line.strip()=="<div class='content'>": # find non-header/footer content for copy
                    write_state = True
                if line.strip()=="<div class='footer'>": # find footer to end copy
                    write_state = False
                if write_state==True: # copy data after header, before footer
                    str_content_data += line

            base_file.seek(0)  # go to first byte of file
            base_file.truncate()  # clear data from file
            base_file.write(header_text.format(page_title) +'\n') # write header, including page title
            base_file.write(str_content_data) # write data
            base_file.write(footer_text) # write footer
