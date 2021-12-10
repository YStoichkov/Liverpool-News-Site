import { Table, Modal, Input, Form } from 'antd'
import 'antd/dist/antd.css'
import { useState, useEffect } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export function LeagueTable() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingTeam, setEditingTeam] = useState(null);
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/teams/all`)
            .then(res => res.json())
            .then(teams => setDataSource(teams));
    }, [setIsEditing]);

    const columns = [
        {
            key: '1',
            title: 'No',
            dataIndex: 'position'
        },
        {
            key: '2',
            title: 'Team',
            dataIndex: 'teamName'
        },
        {
            key: '3',
            title: 'P',
            dataIndex: 'played'
        },
        {
            key: '4',
            title: 'W',
            dataIndex: 'wins'
        },
        {
            key: '5',
            title: 'D',
            dataIndex: 'draws'
        },
        {
            key: '6',
            title: 'L',
            dataIndex: 'loses'
        },
        {
            key: '7',
            title: 'GS',
            dataIndex: 'goalsScored'
        },
        {
            key: '8',
            title: 'GA',
            dataIndex: 'goalsAgainst'
        },
        {
            key: '9',
            title: '+ / -',
            dataIndex: 'difference'
        },
        {
            key: '10',
            title: 'PTS',
            dataIndex: 'points'
        },
        {
            key: '11',
            title: 'Actions',
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => onEditTeam(record)} />
                        <DeleteOutlined onClick={() => onDeleteTeam(record)} style={{ color: 'red', marginLeft: 12 }} />
                    </>
                )
            }
        }
    ]

    const onDeleteTeam = (record) => {
        Modal.confirm({
            title: 'Are you sure, you want to delete this team?',
            okText: 'Yes',
            okType: 'danger',
            onOk: () => {
                setDataSource(pre => {
                    return pre.filter(student => student.id !== record.id)
                })
            }
        })
    }

    const onEditTeam = (record) => {
        setIsEditing(true);
        setEditingTeam({ ...record });
    }

    const resetEditing = () => {
        setIsEditing(false);
        setEditingTeam(null);
    }

    return (
        <>
            <Table columns={columns} dataSource={dataSource} pagination={false} rowKey="_id" ></Table>
            <Modal
                title='Edit team'
                visible={isEditing}
                okText='Save'
                onCancel={() => {
                    resetEditing()
                }}
                onOk={() => {
                    setDataSource(() => {
                        let teamId = editingTeam._id;
                        let teamData = {
                            teamName: editingTeam.teamName,
                            position: editingTeam.position,
                            wins: editingTeam.wins,
                            points: editingTeam.points,
                            played: editingTeam.played,
                            loses: editingTeam.loses,
                            goalsScored: editingTeam.goalsScored,
                            goalsAgainst: editingTeam.goalsAgainst,
                            draws: editingTeam.draws,
                            difference: editingTeam.difference
                        };
                        fetch(`http://localhost:3001/teams/edit/${teamId}`, {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(teamData)
                        })
                            .then(res => res.json())
                            .then(teams => {
                                return setDataSource(teams)
                            })
                    })
                    resetEditing()
                }}
            >
                <Form >
                    <Input value={editingTeam?.position} addonBefore='Position' onChange={(e) => setEditingTeam((pre) => { return { ...pre, position: e.target.value } })} />
                    <Input value={editingTeam?.played} addonBefore='Played' onChange={(e) => setEditingTeam((pre) => { return { ...pre, played: e.target.value } })} />
                    <Input value={editingTeam?.wins} addonBefore='Wins' onChange={(e) => setEditingTeam((pre) => { return { ...pre, wins: e.target.value } })} />
                    <Input value={editingTeam?.draws} addonBefore='Draws' onChange={(e) => setEditingTeam((pre) => { return { ...pre, draws: e.target.value } })} />
                    <Input value={editingTeam?.loses} addonBefore='Loses' onChange={(e) => setEditingTeam((pre) => { return { ...pre, loses: e.target.value } })} />
                    <Input value={editingTeam?.goalsScored} addonBefore='Goals Scored' onChange={(e) => setEditingTeam((pre) => { return { ...pre, goalsScored: e.target.value } })} />
                    <Input value={editingTeam?.goalsAgainst} addonBefore='Goals Against' onChange={(e) => setEditingTeam((pre) => { return { ...pre, goalsAgainst: e.target.value } })} />
                    <Input value={editingTeam?.difference} addonBefore='Difference' onChange={(e) => setEditingTeam((pre) => { return { ...pre, difference: e.target.value } })} />
                    <Input value={editingTeam?.points} addonBefore='Points' onChange={(e) => setEditingTeam((pre) => { return { ...pre, points: e.target.value } })} />
                </Form>
            </Modal>
        </>
    )
}