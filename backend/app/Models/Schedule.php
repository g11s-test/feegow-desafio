<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Schedule extends Model
{
    use SoftDeletes;
    use HasFactory;

    public $timestamps = true;

    protected $fillable = [
    'specialty_id',
    'professional_id',
    'name',
    'cpf',
    'source_id',
    'birthdate',
    'date_time',
];
}
