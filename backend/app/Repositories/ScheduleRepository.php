<?php

namespace App\Repositories;

use App\Models\Schedule;

class ScheduleRepository implements ScheduleRepositoryInterface
{
    public function all()
    {
        return Schedule::all();
    }

    public function create($data)
    {
        return Schedule::create($data);
    }

    public function find($scheduleId)
    {
        return Schedule::where('id', $scheduleId)->firstOrFail();
    }

    public function update($scheduleId, $data)
    {
        $schedule = Schedule::where('id', $scheduleId)->firstOrFail();
        $schedule->update($data);

        return $schedule;
    }

    public function delete($scheduleId)
    {
        return Schedule::where('id', $scheduleId)->delete();
    }
}
