<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreScheduleRequest;
use App\Repositories\ScheduleRepositoryInterface;

class ScheduleController extends Controller
{
    private $scheduleRepository;

    public function __construct(ScheduleRepositoryInterface $scheduleRepository)
    {
        $this->scheduleRepository = $scheduleRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schedules = $this->scheduleRepository->all();

        return response()->json(['data' => $schedules]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StoreScheduleRequest $request)
    {
        $data = $request->validated();
        $schedule = $this->scheduleRepository->create($data);

        return response()->json(['data' => $schedule]);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($scheduleId)
    {
        $schedule = $this->scheduleRepository->find($scheduleId);

        return response()->json(['data' => $schedule]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(StoreScheduleRequest $request, $scheduleId)
    {
        $data = $request->validated();

        $scheduleUpdated = $this->scheduleRepository->update($scheduleId, $data);

        return response()->json(['data' => $scheduleUpdated]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($scheduleId)
    {
        if ($this->scheduleRepository->delete($scheduleId)) {
            return response()->json(['data' => 'Deleted']);
        }

        return response()->json(['data' => 'Error']);
    }
}
