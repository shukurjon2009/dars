file = open('natija.txt', 'r')
lines = file.readlines()
file.close()
print(lines[-1].strip())