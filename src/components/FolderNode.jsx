import React, { useRef, useState } from "react";
import { FaChevronRight, FaChevronDown, FaFolder } from "react-icons/fa";
import { useSelectedNodeState } from "../contexts";

export const FolderNode = ({ node, depth, ancentors = [] }) => {
    const depthRef = useRef(depth + 1);

    const ancentorsRef = useRef([...ancentors, node.id]);

    const [open, setOpen] = useState(true);

    const [selectedNode, setSelectedNode] = useSelectedNodeState();


    const handleContextMenu = (e) => {
        e.preventDefault();
        setSelectedNode({ ...node, ancentors: ancentorsRef.current });
    };

    return (
        <>
            <li id={node.id} style={{ cursor: 'pointer' }}>
                <div
                    className="li-header"
                    style={{
                        paddingLeft: `${15 * depthRef.current}px`,
                        background:
                            selectedNode?.id === node.id
                                ? "rgba(0, 0, 0, 0.3)"
                                : null,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                    }}
                    onClick={() => {
                        node.children && setOpen((prevState) => !prevState);
                        setSelectedNode({
                            ...node,
                            ancentors: ancentorsRef.current,
                        });
                    }}
                    onContextMenu={handleContextMenu}
                >
                    {node.children ? (
                        open ? (
                            <FaChevronDown
                                style={{ marginRight: "4px" }}
                                fontSize={"8px"}
                            />
                        ) : (
                            <FaChevronRight
                                style={{ marginRight: "4px" }}
                                fontSize={"8px"}
                            />
                        )
                    ) : (
                        <></>
                    )}
                    <FaFolder
                        style={{
                            marginLeft: node.children ? 0 : "15px",
                            color: "yellow",
                        }}
                    />
                    {node["Name"]}
                </div>
                {node.children && open && (
                    <ul
                        style={{
                            height: open ? "100%" : 0,
                            overflow: "hiden",
                        }}
                    >
                        {Object.values(node.children).map((subNode, i) => {
                            return (
                                <FolderNode
                                    node={subNode}
                                    key={subNode.id}
                                    depth={depthRef.current}
                                    ancentors={ancentorsRef.current}
                                />
                            );
                        })}
                    </ul>
                )}
            </li>
        </>
    );
};
