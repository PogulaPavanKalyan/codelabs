
# def check_html(filename):
#     with open(filename, 'r') as f:
#         stack = []
#         for line_num, line in enumerate(f, 1):
#             # Simplistic check for <div and </div
#             # This doesn't handle multiple per line correctly but it's a start
#             for word in line.split():
#                 if '<div' in word:
#                     stack.append(('div', line_num))
#                 if '</div' in word:
#                     if not stack:
#                         print(f"Unexpected closing tag at line {line_num}")
#                     else:
#                         stack.pop()
        
#         for tag, line_num in stack:
#             print(f"Unclosed tag {tag} from line {line_num}")

# check_html('c:/Users/Administrator/Desktop/codelabs/src/app/Components/courses/courses.component.html')
