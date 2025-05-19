from matplotlib import pyplot
import matplotlib

matplotlib.use("Agg")

x = [1, 2, 3, 4]
y = [2, 3, 4, 5]

pyplot.figure(figsize=(5, 5))
pyplot.plot(x, y)
pyplot.title('y vs x')
pyplot.ylabel('y')
pyplot.xlabel('x')
pyplot.savefig("./plot.png")
