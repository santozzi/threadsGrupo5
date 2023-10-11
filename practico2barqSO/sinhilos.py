import time

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
tarea_1()
tarea_2()
tarea_3()
momento_parada = time.perf_counter()

print(f"Tomó un total de {momento_parada - momento_arranque: 0.5f} segundos completar las tareas.")

