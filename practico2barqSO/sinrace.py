import time
import threading

acumulador = 0

def sumador(protec):
    global acumulador

    for x in range(1000000):
        protec.acquire()
        acumulador = acumulador + 5
        protec.release()

def restador(protec):
    global acumulador

    for x in range(1000000):
        protec.acquire()
        acumulador = acumulador - 5
        protec.release()
        
proteccion = threading.Lock()
momento_arranque = time.perf_counter()
thr1 = threading.Thread(target=sumador(proteccion,))
thr2 = threading.Thread(target=restador(proteccion,))

thr1.start()
thr2.start()

thr1.join()
thr2.join()

momento_parada = time.perf_counter()

print(f"El valor final es: {acumulador}")
print(f"Tomó un total de {momento_parada - momento_arranque: 0.5f} segundos completar las tareas.")