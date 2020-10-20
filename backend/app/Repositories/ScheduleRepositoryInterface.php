<?php

namespace App\Repositories;

interface ScheduleRepositoryInterface
{
    public function all();

    public function create($data);

    public function find($scheduleId);

    public function update($scheduleId, $data);

    public function delete($scheduleId);
}
