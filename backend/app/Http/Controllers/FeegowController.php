<?php

namespace App\Http\Controllers;

use App\Services\FeegowService;
use Illuminate\Http\Request;

class FeegowController extends Controller
{
    protected $freegowService;

    public function __construct()
    {
        $this->freegowService = new FeegowService();
    }

    public function list_specialties()
    {
        return $this->freegowService->getClient('specialties/list?');
    }

    public function list_professionals(Request $request)
    {
        return $this->freegowService->getClient('professional/list?');
    }

    public function list_sources()
    {
        return $this->freegowService->getClient('patient/list-sources?');
    }
}
