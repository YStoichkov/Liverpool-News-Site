import { Table, Button, Modal, Input, Form } from 'antd'
import 'antd/dist/antd.css'
import { useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export function LeagueTable() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingTeam, setEditingTeam] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            position: 1,
            team: 'Liverpool',
            played: 3,
            wins: 3,
            draws: 0,
            loses: 0,
            goalsScored: 10,
            goalsAgainst: 0,
            difference: '+10',
            points: 9,
        },
    ])
    const columns = [
        {
            key: '1',
            title: 'No',
            dataIndex: 'position'
        },
        {
            key: '2',
            title: 'Team',
            dataIndex: 'team'
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
                        <EditOutlined onClick={() => onEditStudent(record)} />
                        <DeleteOutlined onClick={() => onDeleteTeam(record)} style={{ color: 'red', marginLeft: 12 }} />
                    </>
                )
            }
        }
    ]

    const onAddTeam = () => {
        const randomNumber = parseInt(Math.random() * 1000)
        const newTeam = {
            id: randomNumber,
            number: 1,
            team: 'Liverpool',
            played: 3,
            wins: 3,
            draws: 0,
            loses: 0,
            goalsScored: 10,
            goalsAgainst: 0,
            difference: '+10',
            points: 9,
        };

        setDataSource(pre => {
            return [...pre, newTeam]
        })
    }

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

    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingTeam({ ...record });
    }

    const resetEditing = () => {
        setIsEditing(false);
        setEditingTeam(null);
    }


    return (
        <>
            <Button onClick={onAddTeam}>Add teams</Button>
            <Table columns={columns} dataSource={dataSource}></Table>
            <Modal
                title='Edit team'
                visible={isEditing}
                okText='Save'
                onCancel={() => {
                    resetEditing()
                }}
                onOk={() => {
                    setDataSource(pre => {
                        return pre.map(team => {
                            if (team.id === editingTeam.id) {
                                return editingTeam;
                            } else {
                                return team;
                            }
                        })
                    })
                }}
            >
                <Form>
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