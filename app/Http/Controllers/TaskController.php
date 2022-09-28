<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{
    public function index()
    {
        $array = array('apple'=>'りんご', 'peach'=>'もも', 'pear'=>'なし');
        // ここでランダムでストリングで返せばOK
        return $array['apple'];
        // return Task::all();
        // $array = array('apple'=>'りんご', 'peach'=>'もも', 'pear'=>'なし');
        // log::info("aaaaaa");
        // log::info(print_r($array));
        // return $array;
    }
    
    public function store(Request $request)
    {
        return Task::create($request->all());
    }
    
    public function show(Task $task)
    {
        return $task;
    }
    
    public function update(Request $request, Task $task)
    {
        $task->update($request->all());
        
        return $task;
    }
    
    public function destroy(Task $task)
    {
        $task->delete();
        
        return $task;
    }

    public function chengeFruits()
    {
        $ary = array('りんご', 'もも', 'なし', 'バナナ');
        $key = array_rand($ary, 1);
        Log::info($ary[$key]);
        return $ary[$key];
    }
}

