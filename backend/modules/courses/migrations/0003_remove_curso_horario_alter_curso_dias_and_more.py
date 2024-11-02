# Generated by Django 5.1.1 on 2024-10-08 02:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_curso_dias_curso_horas_alter_curso_estudiantes_and_more'),
        ('teachers', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='curso',
            name='horario',
        ),
        migrations.AlterField(
            model_name='curso',
            name='dias',
            field=models.JSONField(blank=True, default=list, help_text='Días de la semana en los que se imparte el curso'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='horas',
            field=models.JSONField(blank=True, default=dict, help_text='Horario del curso en formato JSON'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='profesor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='cursos', to='teachers.profesor'),
        ),
    ]