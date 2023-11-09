package com.example.practico4_consumirapi;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.HttpResponse;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;
public class MainActivity extends AppCompatActivity {
    private EditText nombre;
    private  EditText  campoTextoGenero ;
    private EditText edad;
    private TextView txtEdadConImagen;
    private ImageView imaGeneroMale;
    private ImageView imaGeneroFem;
    private final String  URL_GENERO = "https://api.genderize.io";
    private final String URL_EDAD ="https://api.agify.io/";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        nombre = (EditText)findViewById(R.id.editTextNombrePersona);
        campoTextoGenero = (EditText) findViewById(R.id.textGenero);
        edad = (EditText) findViewById(R.id.textEdad);

        txtEdadConImagen = (TextView) findViewById(R.id.txtEdadConImagen);
        imaGeneroMale = (ImageView) findViewById(R.id.imgGeneroMale);
        imaGeneroFem = (ImageView) findViewById(R.id.imgGeneroFem);
        imaGeneroFem.setVisibility(View.INVISIBLE);
        imaGeneroMale.setVisibility(View.INVISIBLE);
    }
    public void SendMessage(View view){

        String nombreInput = nombre.getText().toString();
        if(nombreInput.equals("")){
            Toast toast = Toast.makeText(this, "El campo nombre no puede estar vacio", Toast.LENGTH_LONG);
            toast.show();
        }else{
            LlamarAPIGenero(URL_GENERO+"?name="+nombreInput, Request.Method.GET);
            LlamarAPIEdad(URL_EDAD +"?name="+nombreInput, Request.Method.GET);
        }

    }
    public void LlamarAPIEdad(String url, int httpVerb){
        StringRequest stringRequest = new StringRequest(httpVerb, url, new Response.Listener<String>() {

            @Override
            public void onResponse(String response) {
                //aca deberiamos asignar el string al elemento de la UI, por ejemplo

                try {

                    //El json de la respuesta tiene muchos campos, solo extraigo "garder"
                    JSONObject reader = new JSONObject(response);
                    String edadRes = reader.getString("age");
                    //Traduzco al español

                    //asigno el valor de genero al campo de visualizacion de texto
                    edad.setText(edadRes);
                    txtEdadConImagen.setText(edadRes);
                } catch (JSONException e) {

                    e.printStackTrace();
                }

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                campoTextoGenero.setText("Ocurrió un error");
            }
        });

       Volley.newRequestQueue(this).add(stringRequest);
    }
    public void LlamarAPIGenero(String url, int httpVerb){
        StringRequest stringRequest = new StringRequest(httpVerb, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject reader = new JSONObject(response);
                    String genero = reader.getString("gender");
                    if (genero.equals("male")) {
                        genero = "hombre";
                    } else {
                        genero = "mujer";
                    }
                    campoTextoGenero.setText(genero);
                    if(genero.equals("hombre")){
                        imaGeneroMale.setVisibility(View.VISIBLE);
                        imaGeneroFem.setVisibility(View.INVISIBLE);
                    }else{
                        imaGeneroMale.setVisibility(View.INVISIBLE);
                        imaGeneroFem.setVisibility(View.VISIBLE);
                    }
                } catch (JSONException e) {

                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                campoTextoGenero.setText("Ocurrió un error");
            }
        });
        Volley.newRequestQueue(this).add(stringRequest);
    }

}