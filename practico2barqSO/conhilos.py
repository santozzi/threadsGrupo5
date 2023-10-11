import time
import threading


def tarea_1():
    print('Esperando tarea 1...')

    for x in range(100000000):
        pass
    
    print('Listo tarea 1')

def tarea_2():
    print('Esperando tarea 2...')
    time.sleep(1)
    print('Listo tarea 2')

def tarea_3():
    print('Esperando tarea 3...')
    time.sleep(4)
    print('Listo tarea 3')

momento_arranque = time.perf_counter()
thr1 = threading.Thread(target=tarea_1)
thr2 = threading.Thread(target=tarea_2)
thr3 = threading.Thread(target=tarea_3)
thr1.start()
thr2.start()
thr3.start()
thr1.join()
thr2.join()
thr3.join()


momento_parada = time.perf_counter()

print(f"Tomó un total de {momento_parada - momento_arranque: 0.5f} segundos completar las tareas.")

