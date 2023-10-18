package com.example.practico3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {
    /*
    * Práctico 3 - ArquitecturaSO
    * Integrantes
    *   Sergio Antozzi
    *   Jessica Escobar
    *   Aldana Aranda
    *
    * */
    private EditText name;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        name = (EditText) findViewById(R.id.txt_name);
    }

    public void Send(View view){
        Intent activity2 = new Intent(this, Activity2.class);
        activity2.putExtra("name_activity_main", name.getText().toString());

        startActivity(activity2);
    }
}