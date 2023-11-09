// JavaScript Document

$(document).ready( function () {
    $('#2022').DataTable({
						
		paging: false,
        ordering: false,
        info: false,
		language: {
			"autoFill": {
			"cancel": "Cancelar",
			"fill": "Llenar las celdas con <i>%d<i><\/i><\/i>",
			"fillHorizontal": "Llenar las celdas horizontalmente",
			"fillVertical": "Llenar las celdas verticalmente"
			},
			"decimal": ",",
			"emptyTable": "No hay datos disponibles en la Tabla",
			"infoFiltered": "Filtrado de _MAX_ entradas totales",
			"infoThousands": ".",
			"lengthMenu": "Mostrar _MENU_ entradas",
			"loadingRecords": "Cargando...",
			"paginate": {
				"first": "Primera",
				"last": "Ultima",
				"next": "Siguiente",
				"previous": "Anterior"
			},
			"processing": "Procesando...",
			"search": "Buscador:",
			"searchBuilder": {
				"add": "Agregar condición",
				"button": {
					"0": "Constructor de búsqueda",
					"_": "Constructor de búsqueda (%d)"
				},
				"clearAll": "Quitar todo",
				"condition": "Condición",
				"conditions": {
					"date": {
						"after": "Luego",
						"before": "Luego",
						"between": "Entre",
						"empty": "Vacio",
						"equals": "Igual"
					}
				},
				"data": "Datos",
				"deleteTitle": "Borrar regla de filtrado",
				"leftTitle": "Criterio de alargado",
				"logicAnd": "Y",
				"logicOr": "O",
				"rightTitle": "Criterio de endentado",
				"title": {
					"0": "Constructor de búsqueda",
					"_": "Constructor de búsqueda (%d)"
				},
				"value": "Valor"
			},
			"thousands": ".",
			"zeroRecords": "No se encontraron registros que coincidan con la búsqueda",
			"datetime": {
				"previous": "Anterior",
				"next": "Siguiente",
				"hours": "Hora",
				"minutes": "Minuto",
				"seconds": "Segundo",
				"amPm": [
					"AM",
					"PM"
				],
				"months": {
					"0": "Enero",
					"1": "Febrero",
					"10": "Noviembre",
					"11": "Diciembre",
					"2": "Marzo",
					"3": "Abril",
					"4": "Mayo",
					"5": "Junio",
					"6": "Julio",
					"7": "Agosto",
					"8": "Septiembre",
					"9": "Octubre"
				},
				"unknown": "-",
				"weekdays": [
					"Dom",
					"Lun",
					"Mar",
					"Mie",
					"Jue",
					"Vie",
					"Sab"
				]
			},
			"editor": {
				"close": "Cerrar",
				"create": {
					"button": "Nuevo",
					"title": "Crear nueva entrada",
					"submit": "Crear"
				},
				"edit": {
					"button": "Editar",
					"title": "Editar entrada",
					"submit": "Actualizar"
				},
				"remove": {
					"button": "Borrar",
					"title": "Borrar",
					"submit": "Borrar",
					"confirm": {
						"_": "Está seguro que desea borrar %d filas?",
						"1": "Está seguro que desea borrar 1 fila?"
					}
				},
				"multi": {
					"title": "Múltiples valores",
					"info": "La selección contiene diferentes valores para esta entrada. Para editarla y establecer todos los items al mismo valor, clickear o tocar aquí, de otra manera conservarán sus valores individuales.",
					"restore": "Deshacer cambios",
					"noMulti": "Esta entrada se puede editar individualmente, pero no como parte de un grupo."
				},
				"error": {
					"system": "Ocurrió un error de sistema (&lt;a target=\"\\\" rel=\"nofollow\" href=\"\\\"&gt;Más información)."
				}
			},
			"aria": {
				"sortAscending": ": orden ascendente",
				"sortDescending": ": orden descendente"
			},
			"info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
			"infoEmpty": "Mostrando 0 a 0 de 0 entradas"
						
		},
						
		//para usar los botones   
        /*responsive: "true",
		dom: 'Bfrtil',
        buttons: [
            
            {
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i>Generar Excel ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
            
            {
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i>Generar PDF ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			
        ]*/
		
		 	/*dom: 'B<"clear">lfrtip',
    		buttons: {
        				name: 'primary',
        				buttons: [
							{
								className: 'btn btn-success',
								extend: 'copy',
								text: '<i class="fas fa-file-excel"></i>'
							},
							'excel',
							'pdf'
						]
    		}*/
        //dom: 'B<"clear">lfrtip',
		//dom: 'lfrtip',       
        /*buttons: "True",
		buttons:[ 
			{
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
			{
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			{
				extend:    'print',
				text:      '<i class="fa fa-print"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-info'
			}
		]*/
		
	});		
});


$(document).ready( function () {
    $('#2023').DataTable({
						
		paging: false,
        ordering: false,
        info: false,
		language: {
			"autoFill": {
			"cancel": "Cancelar",
			"fill": "Llenar las celdas con <i>%d<i><\/i><\/i>",
			"fillHorizontal": "Llenar las celdas horizontalmente",
			"fillVertical": "Llenar las celdas verticalmente"
			},
			"decimal": ",",
			"emptyTable": "No hay datos disponibles en la Tabla",
			"infoFiltered": "Filtrado de _MAX_ entradas totales",
			"infoThousands": ".",
			"lengthMenu": "Mostrar _MENU_ entradas",
			"loadingRecords": "Cargando...",
			"paginate": {
				"first": "Primera",
				"last": "Ultima",
				"next": "Siguiente",
				"previous": "Anterior"
			},
			"processing": "Procesando...",
			"search": "Buscador:",
			"searchBuilder": {
				"add": "Agregar condición",
				"button": {
					"0": "Constructor de búsqueda",
					"_": "Constructor de búsqueda (%d)"
				},
				"clearAll": "Quitar todo",
				"condition": "Condición",
				"conditions": {
					"date": {
						"after": "Luego",
						"before": "Luego",
						"between": "Entre",
						"empty": "Vacio",
						"equals": "Igual"
					}
				},
				"data": "Datos",
				"deleteTitle": "Borrar regla de filtrado",
				"leftTitle": "Criterio de alargado",
				"logicAnd": "Y",
				"logicOr": "O",
				"rightTitle": "Criterio de endentado",
				"title": {
					"0": "Constructor de búsqueda",
					"_": "Constructor de búsqueda (%d)"
				},
				"value": "Valor"
			},
			"thousands": ".",
			"zeroRecords": "No se encontraron registros que coincidan con la búsqueda",
			"datetime": {
				"previous": "Anterior",
				"next": "Siguiente",
				"hours": "Hora",
				"minutes": "Minuto",
				"seconds": "Segundo",
				"amPm": [
					"AM",
					"PM"
				],
				"months": {
					"0": "Enero",
					"1": "Febrero",
					"10": "Noviembre",
					"11": "Diciembre",
					"2": "Marzo",
					"3": "Abril",
					"4": "Mayo",
					"5": "Junio",
					"6": "Julio",
					"7": "Agosto",
					"8": "Septiembre",
					"9": "Octubre"
				},
				"unknown": "-",
				"weekdays": [
					"Dom",
					"Lun",
					"Mar",
					"Mie",
					"Jue",
					"Vie",
					"Sab"
				]
			},
			"editor": {
				"close": "Cerrar",
				"create": {
					"button": "Nuevo",
					"title": "Crear nueva entrada",
					"submit": "Crear"
				},
				"edit": {
					"button": "Editar",
					"title": "Editar entrada",
					"submit": "Actualizar"
				},
				"remove": {
					"button": "Borrar",
					"title": "Borrar",
					"submit": "Borrar",
					"confirm": {
						"_": "Está seguro que desea borrar %d filas?",
						"1": "Está seguro que desea borrar 1 fila?"
					}
				},
				"multi": {
					"title": "Múltiples valores",
					"info": "La selección contiene diferentes valores para esta entrada. Para editarla y establecer todos los items al mismo valor, clickear o tocar aquí, de otra manera conservarán sus valores individuales.",
					"restore": "Deshacer cambios",
					"noMulti": "Esta entrada se puede editar individualmente, pero no como parte de un grupo."
				},
				"error": {
					"system": "Ocurrió un error de sistema (&lt;a target=\"\\\" rel=\"nofollow\" href=\"\\\"&gt;Más información)."
				}
			},
			"aria": {
				"sortAscending": ": orden ascendente",
				"sortDescending": ": orden descendente"
			},
			"info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
			"infoEmpty": "Mostrando 0 a 0 de 0 entradas"
						
		},
						
		//para usar los botones   
        /*responsive: "true",
		dom: 'Bfrtil',
        buttons: [
            
            {
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i>Generar Excel ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
            
            {
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i>Generar PDF ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			
        ]*/
		
		 	/*dom: 'B<"clear">lfrtip',
    		buttons: {
        				name: 'primary',
        				buttons: [
							{
								className: 'btn btn-success',
								extend: 'copy',
								text: '<i class="fas fa-file-excel"></i>'
							},
							'excel',
							'pdf'
						]
    		}*/
        //dom: 'B<"clear">lfrtip',
		//dom: 'lfrtip',       
        /*buttons: "True",
		buttons:[ 
			{
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
			{
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			{
				extend:    'print',
				text:      '<i class="fa fa-print"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-info'
			}
		]*/
		
	});		
});
