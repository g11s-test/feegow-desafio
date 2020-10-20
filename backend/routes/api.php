<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['as' => 'v1.'], function () {
    Route::get('feegow/sources/list', 'FeegowController@list_sources')->name('feegow.sources.list');
    Route::get('feegow/specialties/list', 'FeegowController@list_specialties')->name('feegow.specialties.list');
    Route::get('feegow/professionals/list', 'FeegowController@list_professionals')->name('feegow.profissionals.list');

    Route::resource('schedules', 'ScheduleController');
});
