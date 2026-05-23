with open("src/app/regal_fit/simulate.cljs", "r") as f:
    text = f.read()

count = 0
for i, c in enumerate(text):
    if c == "(":
        count += 1
    elif c == ")":
        count -= 1

print("Unmatched paren count:", count)
