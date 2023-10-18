package com.example.practico3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class Activity2 extends AppCompatActivity {
    private TextView name2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_2);
        name2 = (TextView)findViewById(R.id.txt_return_name);
        String nombre2 = getIntent().getStringExtra("name_activity_main");
        name2.setText(nombre2);
    }
    public void Back(View view){
        Intent activityMain = new Intent(this, MainActivity.class);

        startActivity(activityMain);
    }
}