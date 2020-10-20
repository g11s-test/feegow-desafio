<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FeegowService
{
    private $BASE_URL = 'https://api.feegow.com/v1/api/';
    private $TOKEN;

    public function __construct()
    {
        $this->TOKEN = config('app.token');
    }

    public function getClient($url)
    {
        $params = $this->getParams();

        $response = Http::withHeaders([
          'accept' => 'application/json',
          'x-access-token' => $this->TOKEN,
        ])->get($this->BASE_URL.$url.$params)
        ->json();

        return $this->validator($response);
    }

    public function getParams()
    {
        return http_build_query(request()->all());
    }

    public function validator($data)
    {
        if (isset($data['success'])) {
            return response()->json(['data' => $data['content']]);
        }

        return response()->json(['data' => 'Error']);
    }
}
