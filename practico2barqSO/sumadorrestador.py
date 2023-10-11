import time

acumulador = 0

def sumador():
    global acumulador

    for x in range(1000000):
        acumulador = acumulador + 5

def restador():
    global acumulador

    for x in range(1000000):
        acumulador = acumulador - 5

momento_arranque = time.perf_counter()
sumador()
restador()
momento_parada = time.perf_counter()

print(f"El valor final es: {acumulador}")
print(f"Tomó un total de {momento_parada - momento_arranque : 0.5f} segundos completar las tareas.")
