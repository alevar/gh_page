import React from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import "./SettingsPanel.css";
import { BedFile } from "../../../../types/api";

interface SettingsPanelProps {
    gtfStatus: number;
    onGTFUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    donorsStatus: number;
    acceptorsStatus: number;
    onBEDUpload: (type: 'donors' | 'acceptors', event: React.ChangeEvent<HTMLInputElement>) => void;
    fontSize: number;
    onFontSizeChange: (value: number) => void;
    width: number;
    onWidthChange: (value: number) => void;
    height: number;
    onHeightChange: (value: number) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
    gtfStatus,
    onGTFUpload,
    donorsStatus,
    acceptorsStatus,
    onBEDUpload,
    fontSize,
    onFontSizeChange,
    width,
    onWidthChange,
    height,
    onHeightChange,
}) => {
    return (
        <div className="settings-panel">
            <Card className="settings-card">
                <Card.Body className="settings-body">
                    <Card.Title className="settings-title">Settings</Card.Title>
                    <Form>
                        {/* GTF Upload */}
                        <Form.Group controlId="gtfUpload">
                            <Form.Label>Pathogen GTF</Form.Label>
                            <Form.Control type="file" onChange={onGTFUpload} />
                            {gtfStatus === -1 && (
                                <div className="text-danger">Error parsing gtf file</div>
                            )}
                        </Form.Group>

                        <Form.Group controlId="donorsBedUpload">
                            <Form.Label>Donors BED</Form.Label>
                            <Form.Control type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onBEDUpload("donors", e)} />
                            {donorsStatus === -1 && (
                                <div className="text-danger">Error parsing donors file</div>
                            )}
                        </Form.Group>

                        <Form.Group controlId="acceptorsBedUpload">
                            <Form.Label>acceptorsBedUpload</Form.Label>
                            <Form.Control type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onBEDUpload("acceptors", e)} />
                            {acceptorsStatus === -1 && (
                                <div className="text-danger">Error parsing acceptors file</div>
                            )}
                        </Form.Group>

                        {/* Font Size */}
                        <Form.Group controlId="fontSize">
                            <Form.Label>Font Size</Form.Label>
                            <Form.Control
                                type="number"
                                value={fontSize}
                                onChange={(e) => onFontSizeChange(Number(e.target.value))}
                            />
                        </Form.Group>

                        {/* Width */}
                        <Form.Group controlId="width">
                            <Form.Label>Width</Form.Label>
                            <Form.Control
                                type="number"
                                value={width}
                                onChange={(e) => onWidthChange(Number(e.target.value))}
                            />
                        </Form.Group>

                        {/* Height */}
                        <Form.Group controlId="height">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                type="number"
                                value={height}
                                onChange={(e) => onHeightChange(Number(e.target.value))}
                            />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SettingsPanel;
